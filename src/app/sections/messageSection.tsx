"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const Section = styled(motion.section)({
  height: "100vh",
  width: "100%",
  overflowY: "auto",
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For Internet Explorer and Edge
  "&::-webkit-scrollbar": {
    display: "none", // For Chrome, Safari, and Edge
  },
});
// const socket = io("/api/messages");

export interface Message {
  id: string;
  name?: string;
  message: string;
  createdAt?: Date;
}

export const MessagesSection = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState<Message[]>([]);
  const [open, setOpen] = React.useState(false);
  const [editId, setEditId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  const handleOpen = (id: any) => {
    console.log("handleopen");
    setOpen(true);
    setEditId(id);
    console.log("edit id", editId);

    const wishToEdit = wishes.find((wish) => wish.id === id);
    console.log("wish message", wishToEdit?.message);
    if (wishToEdit) {
      setEditMessage(wishToEdit.message);
    }
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/messages");
      const result = await response.json();
      setWishes(result);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });
    const response = await data.json();
    const newMessage: Message = {
      id: response.id, // Make sure to receive `id` from the response
      name: name || "Anonymous",
      message,
      createdAt: new Date(), // Assign `createdAt` (or receive it from the server if possible)
    };

    setWishes([...wishes, newMessage]); // Now, this matches the type `Message`
    setName("");
    setMessage("");
  };

  const handleUpdate = async (id: string, message: string) => {
    console.log(id);
    const data = await fetch("/api/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, editMessage }),
    });
    const result = await data.json();
    setWishes((prev) =>
      prev.map((wish: any) =>
        wish.id === editId ? { ...wish, message: editMessage } : wish
      )
    );
    handleClose();
  };

  const handleDelete = async (id: any) => {
    const data = await fetch("/api/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const result = data.json();
    setWishes(wishes.filter((msg) => msg.id != id));
  };

  return (
    <Section className="flex flex-col p-5 ">
      <div className=" w-full h-[15%] flex flex-col justify-center items-center">
        <h1 className="font-sail text-px-28 text-textgreen">
          Send your Wishes
        </h1>
      </div>
      <div className="grid md:grid-cols-2 w-full h-[85%]">
        <div>
          <ScrollArea className="h-[100%] w-full p-4 ">
            {wishes &&
              wishes.map((item, index) => {
                return (
                  <div className=" w-[90%] bg-opacity-10 bg-textgreen backdrop-blur-md grid  p-2 m-2 gap-2 rounded-sm">
                    <div className="flex gap-2 justify-start items-center">
                      <Avatar>
                        <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <h1 className="text-textgreen font-jostSemiBold">
                        {item.name}
                      </h1>
                    </div>
                    <div className=" pl-12">
                      <div>
                        <h1 className="text-textgreen font-jostSemiBold">
                          {item.message}
                        </h1>
                      </div>
                    </div>

                    <div className="flex gap-3 pl-12">
                      <div className="gap-3">
                        <Button
                          className="bg-textgreen hover:bg-textgreen"
                          onClick={() => handleOpen(item.id)}
                        >
                          <EditIcon />
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <div className="grid gap-3 fixed top-1/2 rounded-sm left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  h-auto shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
                            <Typography className="font-jostSemiBold">
                              Edit
                            </Typography>
                            <Input
                              value={editMessage}
                              className="focus:border-none w-full "
                              onChange={(e) => setEditMessage(e.target.value)}
                            />
                            <div className="flex justify-center items-center">
                              <Button
                                onClick={() =>
                                  handleUpdate(item.id, item.message)
                                }
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                      <Button
                        className="bg-textgreen hover:bg-textgreen"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                );
              })}
          </ScrollArea>
        </div>

        <div>
          <div className="flex flex-col items-center h-full  justify-center w-full">
            <div className="w-full md:w-[70%] flex flex-col gap-2 justify-center items-center p-4">
              <Label htmlFor="visitorname" className="w-full ">
                <h1 className="font-jostSemiBold text-px-20 text-textgreen">
                  Your Name
                </h1>
              </Label>
              <Input
                id="name"
                value={name}
                className="border-emerald-950 text-textgreen focus:border-textgreen w-full font-jostSemiBold"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex gap-2 justify-center w-full md:w-[70%] p-4 items-center border-white border-solid">
              <Textarea
                rows={4}
                className="border-emerald-900 text-textgreen focus:border-none font-jostSemiBold "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message && (
                <Button
                  type="submit"
                  className="bg-textgreen shadow-none hover:bg-textgreen"
                  onClick={handleSubmit}
                >
                  submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

{
  /* <Section className="flex justify-center items-center  hidden-scroll">
   
<div className="w-[90%] h-[90%] overflow-y-auto bg-white bg-opacity-10 backdrop-blur-md grid md:grid-cols-2  rounded-sm absolute">
  <div className="p-4 flex w-full h-full  justify-center items-center">
    <div className=" p-5">
      <ScrollArea className="h-[300px] w-full ">
        {wishes &&
          wishes.map((item, index) => {
            return (
              <div className="border-solid border-[1px] w-[90%] border-white  p-2 m-2 gap-3 rounded-sm">
                <div className="flex gap-2 justify-start items-center">
                  <Avatar>
                    <AvatarFallback>
                      {item.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <h1 className="text-textgreen">{item.name}</h1>
                </div>
                <div className=" pl-12">
                  <div>
                    <h1 className="text-textgreen">{item.message}</h1>
                  </div>
                </div>

                <div className="flex gap-3 pl-12">
                  <div className="gap-3">
                    <Button
                      className="bg-textgreen hover:bg-textgreen"
                      onClick={() => handleOpen(item.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <div className="fixed top-1/2 rounded-sm left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  h-auto shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
                        <Typography>Edit</Typography>
                        <Input
                          value={editMessage}
                          className="focus:border-none w-full "
                          onChange={(e) => setEditMessage(e.target.value)}
                        />
                        <Button
                          onClick={() =>
                            handleUpdate(item.id, item.message)
                          }
                        >
                          Submit
                        </Button>
                      </div>
                    </Modal>
                  </div>
                  <Button
                    className="bg-transparent"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            );
          })}
      </ScrollArea>
    </div>
  </div>

  <div className="flex justify-center items-center p-5">
    <div className="flex flex-col items-center  justify-center w-full">
      <div className="w-full md:w-[70%] flex flex-col gap-2 justify-center items-center p-4">
        <Label htmlFor="visitorname" className="w-full">
          Your Name
        </Label>
        <Input
          id="name"
          value={name}
          className="focus:border-none w-full "
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex gap-2 justify-center w-full md:w-[70%] p-4 items-center border-white border-solid">
        <Textarea
          rows={2}
          className="focus:border-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message && (
          <Button
            type="submit"
            className="bg-transparent shadow-none hover:bg-transparent"
            onClick={handleSubmit}
          >
            submit
          </Button>
        )}
      </div>
    </div>
  </div>
</div>
</Section> */
}
