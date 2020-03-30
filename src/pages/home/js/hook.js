import {useState, useEffect} from 'react';

export default function useController(controller, init = {}) {
  const [state, setState] = useState(controller.state);

  useEffect(() => {
    controller.setListener(setState);
    controller.init(init)
    return () => {
      controller.unSetListener()
    }
  }, [controller]);

  return state;
}