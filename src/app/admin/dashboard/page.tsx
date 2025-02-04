import StatsCard from "@/components/admin-components/StatsCard";
import image from "@/assets/image.jpg";

const page = () => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <StatsCard
        title="Total Blogs"
        value={45}
        icon={image}
        description="More blogs than last time."
        percentage={40}
      />
    </div>
  );
};

export default page;
