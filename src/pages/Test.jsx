import React, { useState, useEffect } from "react";

export default function Test() {
  const [time, setTime] = useState(30);
  const [clicks, setclicks] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    document.title = `${time <= 0 ? "0" : time}s left! - Clicks Counter`;
    return () => clearInterval(timer);
  }, [time, setTime]);

  function incremeantClicks() {
    setclicks(clicks + 1);
  }
  function restartTest() {
    window.location.reload();
  }
  return (
    <>
      <button
        style={{ height: "7em", width: "8em" }}
        onClick={incremeantClicks}
        disabled={time <= 0 ? true : false}
      >
        Click here {time <= 0 ? "[Disabled]" : ""}
      </button>
      <h2>Clicks:{clicks}</h2>
      <h2>Time left : {time <= 0 ? "0" : time}s</h2>
      <h2>
        your cps:{" "}
        {time > 0
          ? `Waiting for ${time <= 0 ? "0" : time}s`
          : clicks / 30 + "cps"}
      </h2>
      <button disabled={time <= 0 ? false : true} onClick={restartTest}>
        Restart {time <= 0 ? "" : "[Disabled]"}
      </button>
    </>
  );
}
