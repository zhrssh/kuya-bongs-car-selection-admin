import { Car } from '../types';
import { 
  X, User, Star, Phone, Mail, MapPin, CheckCircle, 
  ShieldCheck, Archive, Tag
} from 'lucide-react';

interface ListingDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onUpdateStatus: (id: string, status: 'available' | 'sold' | 'archived') => void;
}

export default function ListingDetailModal({
  car,
  onClose,
  onUpdateStatus
}: ListingDetailModalProps) {
  if (!car) return null;

  const formattedPrice = `₱${car.price.toLocaleString()}`;
  const formattedMileage = car.mileage.toLocaleString();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-900/45 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-in fade-in zoom-in duration-200 z-10">
        
        {/* Close Button Pin */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/95 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-full shadow-md focus:outline-none transition-colors cursor-pointer border border-zinc-100"
          title="Close details"
          id="close_detail_modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Column: Visuals and Essential Specs (Scrollable on desktop) */}
        <div className="w-full md:w-1/2 flex flex-col overflow-y-auto border-r border-gray-150">
          <div className="relative aspect-video bg-gray-100 flex-shrink-0">
            <img
              src={car.imageUrl}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-xs">
                {car.condition} Condition
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col gap-6">
            {/* Core identity header */}
            <div>
              <div className="text-sm font-semibold text-zinc-400 mb-1.5 leading-none uppercase tracking-widest font-mono">
                {car.year} USED CAR CATALOG
              </div>
              <h2 className="font-display font-semibold text-2xl text-slate-900 mb-1 leading-snug">
                {car.make} {car.model}
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-semibold text-2xl text-blue-600">
                  {formattedPrice}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  | {formattedMileage} km
                </span>
                {car.status && car.status !== 'available' && (
                  <span className={`text-[10px] uppercase font-bold tracking-wider font-mono px-2.5 py-0.5 rounded-md border ${
                    car.status === 'sold' 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                      : 'bg-amber-50 border-amber-200 text-amber-700'
                  }`}>
                    {car.status}
                  </span>
                )}
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-xs font-sans">
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Body Type</span>
                <span className="font-semibold text-gray-800">{car.bodyType}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Fuel Type</span>
                <span className="font-semibold text-gray-800">{car.fuelType}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Transmission</span>
                <span className="font-semibold text-gray-800">{car.transmission}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-400 font-medium">Drivetrain</span>
                <span className="font-semibold text-gray-800">{car.drivetrain}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2 border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-400 font-medium font-sans">Engine Powertrain</span>
                <span className="font-bold text-gray-800 text-xs">{car.engine}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2 border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-400 font-medium font-sans">Colors</span>
                <span className="font-medium text-gray-800">
                  {car.exteriorColor} over {car.interiorColor}
                </span>
              </div>
            </div>

            {/* Vehicle History Check */}
            <div className="border border-emerald-100 bg-emerald-50/20 rounded-xl p-4 flex flex-col gap-3 font-sans">
              <h4 className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider leading-none font-mono">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                Verified Car History
              </h4>
              <ul className="text-xs text-emerald-900 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span><strong>{car.history.owners}</strong> {car.history.owners === 1 ? 'Owner' : 'Owners'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span><strong>{car.history.accidents}</strong> accidents reported</span>
                </li>
                <li className="col-span-1 sm:col-span-2 flex flex-col gap-1 mt-1 border-t border-emerald-100 pt-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block font-mono">Service Status:</span>
                  <span className="font-normal italic text-slate-700">{car.history.serviceHistory}</span>
                </li>
              </ul>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-500 font-mono">
                Seller Remarks
              </h4>
              <p className="text-sm text-gray-650 leading-relaxed font-sans font-normal border-l-2 border-zinc-200 pl-3">
                {car.description}
              </p>
            </div>

            {/* Highlights list */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mb-3.5 font-mono">
                Premium Equipment &amp; Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feat) => (
                  <span
                    key={feat}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/65 text-xs font-medium text-slate-700 font-sans"
                  >
                    <CheckCircle className="h-3 w-3 text-blue-500" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Hub (Simulators & Dealer profile) */}
        <div className="w-full md:w-1/2 flex flex-col overflow-y-auto p-6 gap-6 bg-slate-50/50">
          
          {/* Quick CMS Administrative Deck */}
          <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-xs space-y-4 font-sans">
            <div className="flex items-center gap-2">
              <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600 border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Listing Status Control</h4>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Update the active commercial stage. Shifting status automatically updates analytical counts across metrics dashboards.
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-[10px] uppercase font-bold text-zinc-400 font-mono tracking-wider block">Commercial Status</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => onUpdateStatus(car.id, 'available')}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition cursor-pointer ${
                    (!car.status || car.status === 'available')
                      ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                  }`}
                  id="status_btn_available"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mb-1 ${(!car.status || car.status === 'available') ? 'bg-blue-650' : 'bg-zinc-450'}`}></span>
                  <span className="text-[10px] tracking-tight">Available</span>
                </button>

                <button
                  onClick={() => onUpdateStatus(car.id, 'sold')}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition cursor-pointer ${
                    car.status === 'sold'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700 font-semibold'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-emerald-700 hover:bg-emerald-50/55'
                  }`}
                  id="status_btn_sold"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mb-1 ${car.status === 'sold' ? 'bg-emerald-650' : 'bg-zinc-450'}`}></span>
                  <span className="text-[10px] tracking-tight">Mark Sold</span>
                </button>

                <button
                  onClick={() => onUpdateStatus(car.id, 'archived')}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition cursor-pointer ${
                    car.status === 'archived'
                      ? 'bg-amber-50 border-amber-200 text-amber-750 font-semibold'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-amber-700 hover:bg-amber-50/55'
                  }`}
                  id="status_btn_archived"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mb-1 ${car.status === 'archived' ? 'bg-amber-650' : 'bg-zinc-450'}`}></span>
                  <span className="text-[10px] tracking-tight">Archive</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dealer credentials Card */}
          <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-slate-100 p-1.5 rounded-lg text-slate-700 border border-slate-200">
                <User className="w-4 h-4 text-slate-700" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">Authorized Dealer Credentials</h4>
            </div>

            <div className="space-y-4 font-sans">
              <div className="flex items-start justify-between border-b border-dashed border-zinc-150 pb-3">
                <div>
                  <h6 className="font-semibold text-sm text-slate-900">{car.seller.name}</h6>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Dealer Representative</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 border border-amber-100/50 px-2 py-0.5 rounded-full text-xs font-mono font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{car.seller.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-650 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>{car.seller.phone}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-400 font-sans">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate" title={car.seller.email}>{car.seller.email}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span>{car.seller.location}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
