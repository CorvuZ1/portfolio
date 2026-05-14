import { useProgress } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

export interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  const { progress } = useProgress();

  return (
    <div className={className} data-component="loader">
      loader
    </div>
  );
};
