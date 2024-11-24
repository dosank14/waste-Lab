import Link from "next/link";
import { navList } from "../data/navlist";

export default function Home() {
  return (
    <ul>
      {navList.map((item) => {
        return (
          <li key={item.en}>
            <Link href={`/${item.en}`}>
              {item.ja}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
