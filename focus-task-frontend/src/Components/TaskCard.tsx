
export function TaskCard({ task }: { task: any}) {
     return(
          <div className="bg-amber-800 p-4 rounded-lg shadow">
               <p className="text-lg font-semibold">{task.text}</p>
               <p className="text-sm text-gray-500">Just submitted — waiting for Claude's estimate</p>
          </div>
     )
}