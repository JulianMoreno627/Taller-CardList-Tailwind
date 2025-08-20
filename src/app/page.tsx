export default function Home() {
  return (
    <div className="bg-[#cfd9e3] h-screen flex items-center justify-center">
      <main className="bg-white p-6 rounded-xl shadow-xl w-[360px] flex flex-col">
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Tue Feb 18 2025</span>
          <span className="text-sm text-indigo-600">9:31:25 p.m.</span>
        </div>

        <h1 className="font-bold text-lg text-indigo-900 mb-2">List Tailwind</h1>

        <div className="flex justify-between text-sm text-gray-600">
          <span>s</span>
          <span>m</span>
          <span>t</span>
          <span>w</span>
          <span>t</span>
          <span>f</span>
          <span>s</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
        </div>

        <div className="flex flex-col gap-3">

          <div className="flex justify-between gap-2">
 
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              <span className="line-through text-gray-600 text-sm">take out the trash</span>
            </div>

            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">9:00 AM</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              <span className="line-through text-gray-600 text-sm">do homework</span>
            </div>
            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">12:00 PM</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-white border border-gray-400"></div>
              <span className="text-gray-600 text-sm">go to grocery store</span>
            </div>
            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">1:00 PM</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-white border border-gray-400"></div>
              <span className="text-gray-600 text-sm">run 5 kilometers</span>
            </div>
            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">4:20 PM</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-white border border-gray-400"></div>
              <span className="text-gray-600 text-sm">load the dishwasher</span>
            </div>
            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">9:00 PM</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-md p-2 flex-1">
              <div className="w-5 h-5 rounded-full bg-white border border-gray-400"></div>
              <span className="text-gray-600 text-sm">Take out the trash</span>
            </div>
            <div className="bg-indigo-100 rounded-md p-2 w-20 flex items-center justify-center">
              <span className="text-sm text-indigo-600">9:00 AM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}