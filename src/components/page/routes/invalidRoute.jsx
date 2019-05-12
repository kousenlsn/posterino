import React from "react";
import Exception from "ant-design-pro/lib/Exception";
import QueueAnim from "rc-queue-anim";

const InvalidRoute = () => {
  return (
    <QueueAnim delay={50} duration={[500, 0]} type="left">
      <Exception
        key="404"
        backText="Perhaps lets go back to the start"
        type="404"
        desc="Looks like you got lost"
      />
    </QueueAnim>
  );
};

export default InvalidRoute;
