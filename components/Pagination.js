import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

export default function Pagination({ page, total }) {
  const totalPage = total / PER_PAGE;
  return (
    <div>
      { page > 1 && (
        <Link href={`/events?page=${+page - 1}`}>
          <a className="btn-secondary">Prev page</a>
        </Link>
      )}

      { +page < +totalPage && (
        <Link href={`/events?page=${+page + 1}`}>
          <a className="btn-secondary">Next page</a>
        </Link>
      )}
    </div>
  )
}
