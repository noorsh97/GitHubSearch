type BadgeProps = {
  text: string;
  color: string;
};

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  return (
    <span
      className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
      style={{ backgroundColor: color, color: "#ffffff" }}
    >
      {text}
    </span>
  );
};

export default Badge;
