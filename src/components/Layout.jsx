import pecel from "../img/pecel.png";

const Layout = () => {
  return (
    <div className="container mx-auto  max-w-screen-md  bg-green-200 mt-24">
      <div className="border rounded-lg shadow-lg p-10 relative">
        <div className="w-8 h-8 bg-blue-200 rounded-full flex absolute -top-4 -right-3 cursor-pointer">
          <span className="m-auto ">❌</span>
        </div>
        <img src={pecel} alt="pecel" width={170} className="float-left mr-3" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          fugit vero ratione facilis quam, iste repudiandae possimus cumque
          magni mollitia quasi dicta tenetur laboriosam nobis sit totam officia
          nisi, aliquam placeat quisquam minus? A id doloremque corrupti nisi!
          Cum, quaerat amet odit eaque magni assumenda. Velit ab dolorem quam
          laboriosam illo numquam distinctio pariatur laborum impedit quaerat.
          Aspernatur tenetur obcaecati soluta inventore quos explicabo quia
          possimus a exercitationem voluptate nihil laboriosam, quibusdam
          corrupti dolore vel eius. At sit, ratione inventore nemo mollitia
          earum voluptates corrupti similique repellat porro, architecto animi
          molestias! Vitae expedita reiciendis dolorum porro velit mollitia
          eaque tenetur?
        </p>
      </div>
    </div>
  );
};

export default Layout;
