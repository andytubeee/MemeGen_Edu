import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";
import Input from "@material-tailwind/react/Input";
import { useState, useEffect } from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import ReactCardFlip from "react-card-flip";

const generate = () => {
  const router = useRouter();
  const [unansweredMemeUrl, setUnansweredMemeUrl] = useState();
  const [answeredMemeUrl, setAnsweredMemeUrl] = useState();
  const [flipped, setFlipped] = useState();
  const handleClick = () => {
    setFlipped(!flipped);
  };
  useEffect(() => {
    setUnansweredMemeUrl(window.sessionStorage.getItem("unanswered_meme"));
    setAnsweredMemeUrl(window.sessionStorage.getItem("answered_meme"));
  }, []);
  const downloadMeme = async () => {
    try {
      if (answeredMemeUrl) {
        await saveAs(answeredMemeUrl, "image.jpg");
        Swal.fire("Success", "Downloading meme...", "success").then(() =>
          router.push("/")
        );
      } else
        Swal.fire("Error", "Resource not available", "error").then(() =>
          router.push("/")
        );
    } catch {
      Swal.fire("Error", "Resource not available", "error").then(() =>
        router.push("/")
      );
    }
  };
  return (
    <div className="bg-[#FFE501] overflow-hidden min-w-screen min-h-screen flex justify-center items-center flex-col gap-16">
      {answeredMemeUrl ? (
        <div className="bg-white p-5 rounded-lg">
          <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <Image
              src={answeredMemeUrl}
              width={600}
              height={500}
              onClick={handleClick}
            />
            <Image
              src={unansweredMemeUrl}
              width={600}
              height={500}
              onClick={handleClick}
            />
          </ReactCardFlip>
        </div>
      ) : (
        <p className="text-5xl text-purple-600">Sorry, you have no memes</p>
      )}
      <Button
        className="group"
        color="deepPurple"
        buttonType="filled"
        size="lg"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        onClick={downloadMeme}
      >
        Download
        <Icon name="file_download" size="sm" />
      </Button>
    </div>
  );
};

export default generate;
