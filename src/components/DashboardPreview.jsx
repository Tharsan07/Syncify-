import { CheckCircle2, AlertTriangle, RefreshCw, Activity } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-full animate-in fade-in zoom-in duration-700">
      {/* Top Navigation Mock */}
      <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-semibold text-sm">Syncify Production Engine</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-800 text-xs px-2 py-1 rounded-md text-slate-300 border border-slate-700">v2.1.4</span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow bg-gray-50/50">
        
        {/* Status Widget */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm col-span-1 md:col-span-3 flex justify-between items-center">
          <div>
            <h4 className="text-gray-500 text-sm font-medium mb-1">System Status</h4>
            <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
              <CheckCircle2 size={20} /> All Systems Operational
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-gray-500 text-sm font-medium mb-1">Last Sync</h4>
            <div className="text-gray-900 font-bold">Just now</div>
          </div>
          <div className="text-right hidden sm:block">
            <h4 className="text-gray-500 text-sm font-medium mb-1">Uptime</h4>
            <div className="text-gray-900 font-bold">99.99%</div>
          </div>
        </div>

        {/* Activity Widget */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
           <div className="flex items-center justify-between mb-4">
             <h4 className="text-gray-800 font-bold flex items-center gap-2"><Activity size={18} className="text-green-600" /> Sync Activity (24h)</h4>
             <span className="text-green-700 bg-green-50 text-xs font-bold px-2 py-1 rounded">+12%</span>
           </div>
           <div className="flex items-end gap-2 h-32 mt-4">
              {[40, 70, 45, 90, 65, 80, 55, 100, 75, 85, 60, 95].map((val, i) => (
                <div key={i} className="flex-1 bg-green-100 rounded-t-sm hover:bg-green-200 transition-colors relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-green-600 rounded-t-sm transition-all duration-1000" 
                    style={{ height: `${val}%` }}
                  ></div>
                </div>
              ))}
           </div>
        </div>

        {/* Alerts Widget */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col">
           <h4 className="text-gray-800 font-bold mb-4 flex items-center gap-2"><AlertTriangle size={18} className="text-amber-500" /> Active Alerts</h4>
           <div className="space-y-3 flex-grow">
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg flex items-start gap-3">
                 <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                 <div>
                   <p className="text-sm font-medium text-amber-900">API Rate Limit Nearing</p>
                   <p className="text-xs text-amber-700 mt-1">Salesforce API at 85% capacity.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Logs Widget */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm col-span-1 md:col-span-3">
           <h4 className="text-gray-800 font-bold mb-4 flex items-center gap-2"><RefreshCw size={18} className="text-gray-500" /> Recent Sync Logs</h4>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
               <thead>
                 <tr className="text-gray-500 border-b border-gray-100">
                   <th className="pb-2 font-medium">Timestamp</th>
                   <th className="pb-2 font-medium">Object</th>
                   <th className="pb-2 font-medium">Action</th>
                   <th className="pb-2 font-medium text-right">Status</th>
                 </tr>
               </thead>
               <tbody className="text-gray-700">
                 {[
                   { time: '10:42:05 AM', obj: 'Order #1042', action: 'Create', status: 'Success', color: 'text-green-600 bg-green-50' },
                   { time: '10:41:12 AM', obj: 'Customer ID: 892', action: 'Update', status: 'Success', color: 'text-green-600 bg-green-50' },
                   { time: '10:38:45 AM', obj: 'Product: SKU-99', action: 'Update', status: 'Success', color: 'text-green-600 bg-green-50' },
                   { time: '10:35:10 AM', obj: 'Order #1041', action: 'Create', status: 'Retrying', color: 'text-amber-600 bg-amber-50' },
                 ].map((log, i) => (
                   <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-green-50/20 transition-colors">
                     <td className="py-2">{log.time}</td>
                     <td className="py-2 font-medium">{log.obj}</td>
                     <td className="py-2 text-slate-500">{log.action}</td>
                     <td className="py-2 text-right">
                       <span className={`px-2 py-1 rounded-md text-xs font-bold ${log.color}`}>{log.status}</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

      </div>
    </div>
  );
}
