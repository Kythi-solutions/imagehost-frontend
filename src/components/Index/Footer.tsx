import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bottom-0 mt-36 bg-background w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-6">
          <hr className="border-[#21232c] sm:mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <p className="text-sm font-light">
              © {new Date().getFullYear()} Kythi. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link legacyBehavior href="/legal/terms">
                <p className="text-primary-white hover:text-primary-white/70 cursor-pointer font-light anim">
                  Terms
                </p>
              </Link>
              <Link legacyBehavior href="/legal/privacy">
                <p className="text-primary-white cursor-pointer font-light">
                  Privacy
                </p>
              </Link>
              <Link legacyBehavior href="/support">
                <p className="text-primary-white cursor-pointer font-light">
                  Support
                </p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
