
type MenuToggleProps = {
    toggle: () => void,
    isMenuOpen: boolean
}

export default function MenuToggle(props: MenuToggleProps) {
  return (
    <div
      onClick={props.toggle}
      className="relative  p-2 border-2 top-1 flex lg:hidden z-30"
    >
      <div className="space-y-2">
        <div
          className={`w-8 h-[3px] bg-white transition-all ${
            props.isMenuOpen && "rotate-45" + " " + "translate-y-1.5"
          }`}
        ></div>
        <div
          className={`w-8 h-[3px] bg-white transition-all ${
            props.isMenuOpen && "hidden"
          }`}
        ></div>
        <div
          className={`w-8 h-[3px] bg-white transition-all ${
            props.isMenuOpen && "-rotate-45" + " " + "-translate-y-1.5"
          }`}
        ></div>
      </div>
    </div>
  );
}