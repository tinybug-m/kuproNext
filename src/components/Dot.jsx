// components/Dot.js
const Dot = ({ isActive ,index,changeComponent}) => {
    return (
      <span
        style={{
          fontSize: '2rem',
          background:isActive && 'linear-gradient(to right, #337EB6 50%,#1AB658)',
          height: '4px',
          width: isActive ? "100%" : "50%" ,
          borderRadius: "8px",
          transition: 'color 0.3s ease-in-out, width 0.3s ease-in-out',
        }}
        className={`bg-slate-500 hover:bg-black`}
        onClick={()=>changeComponent(index)}
      >

      </span>
    );
  };

  export default Dot;
