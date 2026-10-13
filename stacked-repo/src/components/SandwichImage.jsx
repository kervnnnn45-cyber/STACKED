import { useState } from "react";
import { theme } from "../theme";
import { sandwichArt } from "../utils/sandwichArt";

// Shows the item's photo (item.image). Falls back to placeholder artwork if no photo is set or it fails to load.
export default function SandwichImage({ item, className = "" }) {
  const [failed, setFailed] = useState(!item.image);
  return (
    <div className={`overflow-hidden ${theme.img} ${className}`}>
      {failed
        ? <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: sandwichArt(item) }} />
        : <img src={item.image} alt={item.name} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-full w-full object-cover" />}
    </div>
  );
}
