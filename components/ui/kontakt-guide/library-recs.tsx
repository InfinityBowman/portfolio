import React from "react";

const LibraryRecommendations = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">What Libraries Should You Get?</h2>
      <p>
        There are many many libraries and only so much money in your bank and space on your drives, so which ones should
        you prioritize? There are many such lists online but as someone who has way too many libraries and has used many
        of them extensively, I will give you my personal and biased recommendations. But remember in the end, the
        libraries that sound best to you may differ from the ones that sound best to me. The links are to the
        manufacturer's website so that you may read about the libraries in more detail and listen to audio demos if you
        are interested. They are in no particular order. This will also be updated as time goes on and my opinions
        change and as I use the libraries more.
      </p>
      <p>
        If you want more opinions from more people on more libraries then see the VI Control forums. They are an
        excellent place to read about anything virtual instrument related. Also note: Kontakt libraries do use a lot of
        storage space and RAM, if you have under 8 GB or even under 16 GB of RAM, you should be careful which libraries
        you choose as some are much heavier on RAM usage than others.
      </p>
      <p>
        Extra good-to-know stuff: If you are an FL Studio user I highly recommend checking out the BRSO Articulate
        plugin. It is free and made to work with FL Studio and it makes key switching a breeze. If you don’t opt to use
        it then you may want to know that the note colors in FL Studio correspond to the midi in channel in Kontakt. So
        you can load up multiple patches and use them all separately in one piano roll without actually key switching. I
        wrote a guide here.
      </p>
      <p>
        <strong>IMPORTANT:</strong> Some of the paid libraries below will work in Kontakt Player (such as Audio Imperia)
        but most require Kontakt Full. All Kontakt Player libraries will work in Kontakt Full but not the other way
        around. If you have an older version of Kontakt (&lt;7) then make sure to check the version requirements before
        buying a library.
      </p>
    </div>
  );
};

export default LibraryRecommendations;
