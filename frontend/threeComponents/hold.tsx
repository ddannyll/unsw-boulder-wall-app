import { Vector3 } from "three";

interface HoldProps {
  position: Vector3;
}
export default function Hold({ position }: HoldProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.2, 0.2, 0.2]}></boxGeometry>
      <meshStandardMaterial color="blue"></meshStandardMaterial>
    </mesh>
  );
}
