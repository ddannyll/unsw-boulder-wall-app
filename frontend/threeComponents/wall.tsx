import "@react-three/fiber";
export default function Wall() {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 3]}></boxGeometry>
      <meshStandardMaterial color="orange"></meshStandardMaterial>
    </mesh>
  );
}
