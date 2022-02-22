---
title: React-spring
tags:
  - javascript
  - css
---

# Waypoints with react-spring

```tsx
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const Waypoints = () => {
  const [toggle, setToggle] = useState(false);
  const animation = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translate3d(0,0,0)" : "translate3d(50%,0,0)",
  });
  return (
    <div>
      <Waypoint bottomOffset="30%" onEnter={() => setToggle(true)} />
      <animated.p style={animation}>
        Jianbing lomo lumbersexual put a bird on it fixie next level pitchfork
        gentrify, disrupt echo park. Hot chicken subway tile drinking vinegar
        fixie. YOLO keytar gluten-free artisan live-edge four loko cred man
        braid food truck leggings. Health goth semiotics kogi heirloom authentic
        hell of. Pork belly helvetica cornhole gentrify microdosing austin
        chillwave pitchfork paleo cred raclette venmo vegan fashion axe +1.
      </animated.p>
    </div>
  );
};
```
