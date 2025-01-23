import { useWindowScroll } from './useWindowScroll';
import './App.css';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="block">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}> Scroll to top </button>
    </div>
  );
}
export default Demo;
