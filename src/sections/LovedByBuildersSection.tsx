import React from "react";
import CustomStyledHeader from "@/components/common/CustomStyledHeader";
import MainButton from "@/components/common/MainButton";
import TweetCard from "@/components/common/TweetCard";

function LovedByBuildersSection() {
  const tweets = [
    {
      imageUrl: "/images/a_1.png",
      reviewerName: "Sebastiaan Debrouwere",
      reviewerTag: "@iamsebdeb",
      review:
        "We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI",
      timestamp: "10:01 PM - Apr 7, 2024",
    },

    {
      imageUrl: "/images/a_2.png",
      reviewerName: "Alon",
      reviewerTag: "@alon",
      review:
        "As an early stage startup I'm really loving using @attio - great balance of flexibility and prescriptiveness",
      timestamp: "6:57 PM - Dec 1, 2024",
    },

    {
      imageUrl: "/images/a_3.png",
      reviewerName: "Alexandra Smith",
      reviewerTag: "@smith_alexandra",
      review:
        "We use our CRM @attio for sales, fundraising, and recruiting. It's awesome",
      timestamp: "1:32 PM - Jan 2, 2025",
    },

    {
      imageUrl: "/images/a_4.png",
      reviewerName: "Khrisna",
      reviewerTag: "@ntkris",
      review:
        "Holy shit @attio is beautiful 😍 I've run my CRM on Notion to date. Hubspot & Salesforce too clunky. Sleek and simple, just what I need",
      timestamp: "10:22 PM - Jan 3, 2025",
    },

    {
      imageUrl: "/images/a_5.png",
      reviewerName: "Villa Gouse",
      reviewerTag: "@villa_gouse",
      review:
        "Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will...not the other way around. I am a huge fan of @attio - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple.",
      timestamp: "10:22 PM - Jan 3, 2025",
    },
    {
      imageUrl: "/images/a_6.png",
      reviewerName: "Damian",
      reviewerTag: "@damian09",
      review:
        "I've been using @attio to track applicants, manage my deal pipeline and manage the associated notes/tasks. The use-cases are unlimited; it truly feels like the Notion of CRM.",
      timestamp: "10:22 PM - Jan 3, 2025",
    },
  ];
  return (
    <section className="builder-cont">
      <div>
        <CustomStyledHeader
          titleColored="Loved by"
          titleUnColored="Developers"
          description="Attio is the customer relationship management tool for everyone who values collaboration."
        />

        <MainButton
          text="More customer stories"
          size="small"
          className="btn-test"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 margin-double">
        {tweets.map((item, index) => (
          <TweetCard {...item} key={index} />
        ))}
      </div>

      <div className=" hidden lg:block absolute bottom-2 left-0 w-full">
        <img
          src="/images/fade_gradient.png"
          alt="gradient"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default LovedByBuildersSection;
