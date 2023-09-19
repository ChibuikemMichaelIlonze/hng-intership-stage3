import PublicRoutes from "@/routes/PublicRoutes";

const Signup = () => {
  return (
   <PublicRoutes>
     <form>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Image Gallery</h1>
            <p className="py-6">Sign up to share your images</p>
          </div>
          <div className="card sm:w-[30rem] bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
   </PublicRoutes>
  );
};

export default Signup;
