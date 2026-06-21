import Link from 'next/link'

export default function () {
    return (
        <div>
            <Link legacyBehavior href="/">
                <a > 首页 </a>
            </Link>
        </div>
    )
}