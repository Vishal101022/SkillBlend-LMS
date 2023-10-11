import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";

const ChapterIdPage = async ({
  params,
}: {
  params: { chapterId: string; courseId: string };
}) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if(!chapter || ! course){
    return redirect("/");
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted

  return <div>
    {userProgress?.isCompleted && (
        <Banner
          variant="success"
          label="you already completed this chapter"
        />
    )}
    {isLocked && (
        <Banner
          variant="warning"
          label= "you need to purchase this course to watch this chapter."
        />
    )}
    <div className="flex flex-colmax-w-4xl mx-auto pb-20">
        <div className=" p-4">
            <VideoPlayer 
            chapterId = {params.chapterId}
            title = {chapter.title}
            courseId = {params.courseId}
            nextChapterId = {nextChapter?.id!}
            playbackId = {muxData?.playbackId!}
            isLocked = {isLocked}
            completeOnEnd = {completeOnEnd}
            />
        </div>
    </div>
  </div>;
};

export default ChapterIdPage;
