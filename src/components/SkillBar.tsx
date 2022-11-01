type BarProps = {
  icon: string;
  name: string;
  color: string;
}

const SkillBar = (props: BarProps) => (
  <>
    <div className={`cursor-pointer bg-zinc-800/50 p-4 hover:bg-zinc-700/50 shadow-lg transition-all duration-200 rounded-lg w-full  text-white ${props.color}`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center h-[26px]">
          <img
            alt={`${props.name} Logo`}
            src={props.icon}
            className="rounded-sm"
            width="24"
            height="24"
          />
        </div>
        <p className={`text-md font-semibold`}>
          {props.name}
        </p>
      </div>
    </div>
  </>

)

export { SkillBar }