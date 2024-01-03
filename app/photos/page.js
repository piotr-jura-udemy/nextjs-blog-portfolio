export default function PhotosPage() {
  return (
    <div>
      <h1 className="text-2xl mb-8 font-semibold">
        My Photos
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="h-60 overflow-hidden">
          <img src="/images/dog1.png" className="object-cover w-full h-full" />
        </div>
        <div className="h-60 overflow-hidden">
          <img src="/images/dog2.png" className="object-cover w-full h-full" />
        </div>
        <div className="h-60 overflow-hidden">
          <img src="/images/dog3.png" className="object-cover w-full h-full" />
        </div>
        <div className="h-60 overflow-hidden">
          <img src="/images/dog4.png" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}