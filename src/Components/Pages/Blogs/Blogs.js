import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      <div className="mx-7 p-5 rounded-lg my-7 shadow-xl">
        <h1 className="text-4xl text-[#116F6A] text-justify my-4 ">
          Difference between javascript and nodejs
        </h1>
        <p className="text-justify">
          Javascript is a programming language where node js is a runtime
          environment which helps javascript to run in the server side. <br />
          Javascript is used in front end development where we use node js for
          back end web development. <br />
          Javascript can add html tags and node js can not do that.
        </p>
      </div>
      <div className="mx-7 p-5 rounded-lg my-7 shadow-xl">
        <h1 className="text-4xl text-[#116F6A] text-justify my-4 ">
          {" "}
          Differences between SQL and NOSQL databases.
        </h1>
        <p className="text-justify">
          SQL databases are vertically scalable whereas NOSQL databases are
          horizontally scalable .This is the reason which makes NOSQL databases
          larger and more powerful. SQL databases are table based whereas NOSQL
          databases are key -value paired. SQL databases are stuctured whereas
          NOSQL databases are flexible.
        </p>
      </div>
      <div className="mx-7 p-5 rounded-lg my-7 shadow-xl">
        <h1 className="text-4xl text-[#116F6A] text-justify my-4 ">
          When should you use nodejs?
        </h1>

        <h1 className="text-4xl text-[#116F6A] text-justify my-4 ">
          When should you use mongodb?
        </h1>
        <p className="text-justify">
          When we have to work with large number of different types document ,
          it is convenient to use mongodb as it is flexilble and horizontally
          scalable so it can use more server to store more data . Moreover it
          serves some speciliazed data structure.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
