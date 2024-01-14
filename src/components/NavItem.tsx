function NavItem({ text }: { text: string }) {
  return (
    <li>
      <a href={`#${text}`} className=" uppercase">
        {text}
      </a>
    </li>
  );
}

export default NavItem;
