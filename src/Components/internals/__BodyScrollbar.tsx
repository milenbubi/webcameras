import { useLayoutEffect, useRef } from "react";
import { useAdminScrollbar } from "@ffilip/mui-react-utils/mui";



function __BodyScrollbar() {
  const { admScrlBarClassName, baseClassName } = useAdminScrollbar();
  const prevBase = useRef(baseClassName);


  useLayoutEffect(() => {
    const layoutWrapper = document.body;

    // 1) Remove old class if the name changed
    if (prevBase.current !== baseClassName) {
      layoutWrapper.classList.remove(prevBase.current);
      prevBase.current = baseClassName;
    }

    // 2) Apply or remove active class
    layoutWrapper.classList.toggle(baseClassName, !!admScrlBarClassName);

  }, [admScrlBarClassName, baseClassName]);


  return null;
}



export default __BodyScrollbar;