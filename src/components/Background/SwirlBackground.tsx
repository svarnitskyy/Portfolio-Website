import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import "./SwirlBackground.css";

type Props = {
    children: React.ReactNode;
};

export default function SwirlBackgroundWrapper({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const TAU = Math.PI * 2;
        const rand = (n = 1) => Math.random() * n;
        const randRange = (n: number) => n * (2 * Math.random() - 1);
        const fadeInOut = (t: number, m: number) => {
            const hm = 0.5 * m;
            return Math.abs((t + hm) % m - hm) / hm;
        };
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const noise3D = createNoise3D();

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const parent = containerRef.current!;
        let animationFrameId: number;

        const particleCount = 700;
        const particlePropCount = 9;
        const particlePropsLength = particleCount * particlePropCount;
        const rangeY = 100;
        const baseTTL = 50;
        const rangeTTL = 150;
        const baseSpeed = 0.5;
        const rangeSpeed = 2;
        const baseRadius = 1;
        const rangeRadius = 4;
        const baseHue = 220;
        const rangeHue = 100;
        const noiseSteps = 8;
        const xOff = 0.00125;
        const yOff = 0.00125;
        const zOff = 0.0005;
        const backgroundColor = "hsl(0,0%,0%)";

        let center: [number, number] = [0, 0];
        let tick = 0;
        const particleProps = new Float32Array(particlePropsLength);

        const resize = () => {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            center = [canvas.width / 2, canvas.height / 2];
        };

        const initParticle = (i: number) => {
            const x = rand(canvas.width);
            const y = center[1] + randRange(rangeY);
            const vx = 0;
            const vy = 0;
            const life = 0;
            const ttl = baseTTL + rand(rangeTTL);
            const speed = baseSpeed + rand(rangeSpeed);
            const radius = baseRadius + rand(rangeRadius);
            const hue = baseHue + rand(rangeHue);
            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        };

        const initParticles = () => {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        };

        const updateParticle = (i: number) => {
            const x = particleProps[i];
            const y = particleProps[i + 1];
            const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
            const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
            const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
            const life = particleProps[i + 4];
            const ttl = particleProps[i + 5];
            const speed = particleProps[i + 6];
            const x2 = x + vx * speed;
            const y2 = y + vy * speed;
            const radius = particleProps[i + 7];
            const hue = particleProps[i + 45];

            ctx.save();
            ctx.lineCap = "round";
            ctx.lineWidth = radius;
            ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();

            particleProps[i] = x2;
            particleProps[i + 1] = y2;
            particleProps[i + 2] = vx;
            particleProps[i + 3] = vy;
            particleProps[i + 4] = life + 1;

            const outOfBounds =
                x2 < 0 || x2 > canvas.width || y2 < 0 || y2 > canvas.height;
            if (outOfBounds || life > ttl) {initParticle(i);}
        };

        const draw = () => {
            tick++;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i);
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        initParticles();
        draw();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="swirl-bg-wrapper" ref={containerRef}>
            <canvas ref={canvasRef} className="swirl-bg-canvas" />
            <div className="swirl-bg-content">{children}</div>
        </div>
    );
}
