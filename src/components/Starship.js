export default function Starship({ className, ...rest }) {
  return (
    <div {...rest} className={`${className} starship`}>
      <span role="img" aria-label="starship">
        🚀
      </span>
    </div>
  );
}
