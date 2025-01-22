import { useViewportSize } from './useViewportSize';

function Demo() {
  const { width, height } = useViewportSize();

  return (
    <>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  );
}

export default Demo;
