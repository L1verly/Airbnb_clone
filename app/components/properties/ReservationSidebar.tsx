const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-lg"><span className="font-medium text-2xl">$200</span> night</h2>

        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label className="block text-sm">GUESTS</label>
            <select name="" id="" className="w-full -ml-1 text-sm">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
        </div>

        <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl bg-gradient-to-r from-red-400 transition hover:scale-95">Reserve</div>

        <div className="mb-4 flex justify-between align-center">
            <u>$200 x 4 nights</u>

            <p>$800</p>
        </div>

        <div className="mb-4 flex justify-between align-center">
            <u>Cleaning fee</u>
            <p>$200</p>
        </div>

        <div className="mb-4 flex justify-between align-center">
            <u>Airbnb fee</u>
            <p>$200</p>
        </div>

        <hr />
         
        <div className="my-4 flex justify-between align-center font-bold">
            <p>Total before taxes</p>
            <p>$200</p>
        </div>

    </aside>
  )
}

export default ReservationSidebar