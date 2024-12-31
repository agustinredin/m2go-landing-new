import { cn } from "@/lib/utils"

export const Card = ({className, data, ...props}) => {
    return (
        <div className={cn("card flex basis-1/3 flex-col justify-center items-center bg-white rounded-xl shadow-2xl border border-[#e1e1e9] max-w-sm w-64 h-content", className)} {...props}>
        <div className="card-image w-full">
          <img
            className="w-full object-cover rounded-t-lg h-48"
            src={data.src}
            alt="visibilidad"
          />
        </div>
        <div className="card-heading pt-6 pb-2 text-center">
          <span className="text-lg font-bold">{data.title}</span>
        </div>
        <div className="text-center px-4 pt-2 py-4">
          <span className="text-sm text-muted">
            {data.description}
          </span>
        </div>
      </div>
    )
}