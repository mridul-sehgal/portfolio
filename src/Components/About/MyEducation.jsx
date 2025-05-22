const MyEducation = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-4 ">
          My Educational Background?
        </div>
        <div className="flex justify-center items-center mt-4 mx-6">
          <table>
            <thead className="text-[#64ccc5] text-2xl ">
              <tr>
                <th className="border-2 border-[#64ccc5] p-4">Degree</th>
                <th className="border-2 border-[#64ccc5] p-4">Institution</th>
                <th className="border-2 border-[#64ccc5] p-4">Year</th>
                <th className="border-2 border-[#64ccc5] p-4">
                  Marks Obtained
                </th>
              </tr>
            </thead>
            <tbody className="text-white text-xl">
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-4">
                  B.Tech (Electronics and communication Engineering with
                  Computer Science Minor)
                </td>
                <td className="border-2 border-[#64ccc5] p-4">
                  Bharati Vidyapeeth’s College of Engineering, New Delhi.
                </td>
                <td className="border-2 border-[#64ccc5] p-4">2021-2025</td>
                <td className="border-2 border-[#64ccc5] p-4">
                  8.85 (7th sem)
                </td>
              </tr>
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-4">
                  CBSE Class XII Board
                </td>
                <td className="border-2 border-[#64ccc5] p-4">
                  N.C. Jindal Public School, New Delhi
                </td>
                <td className="border-2 border-[#64ccc5] p-4">2020</td>
                <td className="border-2 border-[#64ccc5] p-4">88.83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* large screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-2 p-2 ">
          My Educational Background?
        </div>
        <div className="flex justify-center items-center mt-4 mx-6">
          <table>
            <thead className="text-[#64ccc5] text-lg ">
              <tr>
                <th className="border-2 border-[#64ccc5] p-2">Degree</th>
                <th className="border-2 border-[#64ccc5] p-2">Institution</th>
                <th className="border-2 border-[#64ccc5] p-2">Year</th>
                <th className="border-2 border-[#64ccc5] p-2">
                  Marks Obtained
                </th>
              </tr>
            </thead>
            <tbody className="text-white text-lg">
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-2">
                  B.Tech (Electronics and communication Engineering with
                  Computer Science Minor)
                </td>
                <td className="border-2 border-[#64ccc5] p-2">
                  Bharati Vidyapeeth’s College of Engineering, New Delhi.
                </td>
                <td className="border-2 border-[#64ccc5] p-2">2021-2025</td>
                <td className="border-2 border-[#64ccc5] p-2">
                  8.85 (7th sem)
                </td>
              </tr>
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-2">
                  CBSE Class XII Board
                </td>
                <td className="border-2 border-[#64ccc5] p-2">
                  N.C. Jindal Public School, New Delhi
                </td>
                <td className="border-2 border-[#64ccc5] p-2">2020</td>
                <td className="border-2 border-[#64ccc5] p-2">88.83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* mdium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-3xl mt-2 p-2 ">
          My Educational Background?
        </div>
        <div className="flex justify-center items-center mt-4 mx-6">
          <table className="mb-4">
            <thead className="text-[#64ccc5] text-2xl ">
              <tr>
                <th className="border-2 border-[#64ccc5] p-2">Degree</th>
                <th className="border-2 border-[#64ccc5] p-2">Institution</th>
                <th className="border-2 border-[#64ccc5] p-2">Year</th>
                <th className="border-2 border-[#64ccc5] p-2">
                  Marks Obtained
                </th>
              </tr>
            </thead>
            <tbody className="text-white text-2xl">
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-2">
                  B.Tech (Electronics and communication Engineering with
                  Computer Science Minor)
                </td>
                <td className="border-2 border-[#64ccc5] p-2">
                  Bharati Vidyapeeth’s College of Engineering, New Delhi.
                </td>
                <td className="border-2 border-[#64ccc5] p-2">2021-2025</td>
                <td className="border-2 border-[#64ccc5] p-2">
                  8.85 (7th sem)
                </td>
              </tr>
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-2">
                  CBSE Class XII Board
                </td>
                <td className="border-2 border-[#64ccc5] p-2">
                  N.C. Jindal Public School, New Delhi
                </td>
                <td className="border-2 border-[#64ccc5] p-2">2020</td>
                <td className="border-2 border-[#64ccc5] p-2">88.83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* small screen view */}
      <div className="block md:hidden ">
        <div className=" text-[#64ccc5] text-3xl mt-2 p-2 ">
          My Educational Background?
        </div>
        <div className="flex justify-center items-center mt-4">
          <table className="mb-4">
            <thead className="text-[#64ccc5] text-xs ">
              <tr>
                <th className="border-2 border-[#64ccc5] p-1">Degree</th>
                <th className="border-2 border-[#64ccc5] p-1">Institution</th>
                <th className="border-2 border-[#64ccc5] p-1">Year</th>
                <th className="border-2 border-[#64ccc5] p-1">
                  Marks Obtained
                </th>
              </tr>
            </thead>
            <tbody className="text-white text-xs">
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-1">
                  B.Tech (Electronics and communication Engineering with
                  Computer Science Minor)
                </td>
                <td className="border-2 border-[#64ccc5] p-1">
                  Bharati Vidyapeeth’s College of Engineering, New Delhi.
                </td>
                <td className="border-2 border-[#64ccc5] p-1">2021-2025</td>
                <td className="border-2 border-[#64ccc5] p-1">
                  8.85 (7th sem)
                </td>
              </tr>
              <tr className="border-b-2 border-[#64ccc5]">
                <td className="border-2 border-[#64ccc5] p-1">
                  CBSE Class XII Board
                </td>
                <td className="border-2 border-[#64ccc5] p-1">
                  N.C. Jindal Public School, New Delhi
                </td>
                <td className="border-2 border-[#64ccc5] p-1">2020</td>
                <td className="border-2 border-[#64ccc5] p-1">88.83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyEducation;
