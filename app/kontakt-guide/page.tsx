import Image from "next/image";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-5xl">Get BeThere for iOS/Android</div>
        <div className="flex flex-row justify-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={190}
              height={60}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Google Play Badge.svg"
              alt="Get it on Google Play"
              width={215}
              height={60}
              // style={{ width: "225px", height: "66.85px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
