



function Forecast({forecast}){


    

    const loadingCard = 
    <div className="animate-pulse flex flex-col items-center py-4 rounded-[12px] shrink-0 bg-gray-800 w-36 h-36">
        <span className="w-16 h-16"></span>
        <span>...</span>
        <span>...</span>

    </div>;

    return(<>
            
            <h1 className="text-2xl font-bold mt-4 mx-4">Later Today</h1>
            <div className="flex mx-auto items-center p-2 overflow-x-scroll scrollbar-hidden gap-4 min-w-0 w-full max-w-fit ">
                        
                {
                

                forecast.length > 0 && 
                forecast.map((d, i) => 
                i > new Date(
                ).getHours()
                    && 
                d &&
                <div key={d.time_epoch} className="flex flex-col items-center py-4 rounded-[12px] shrink-0 bg-gray-800 w-36 h-36">
                    <span><img src={d.condition.icon} /></span>
                    <span>{d.temp_c}°C</span>
                    <span>{d.time.split(' ')[1]}</span>
                </div>

            )
                ||
                <>
                    {loadingCard}
                    {loadingCard}
                    {loadingCard}
                    {loadingCard}
                </>
                
                }
            </div>
        
    </>)
}


export default Forecast