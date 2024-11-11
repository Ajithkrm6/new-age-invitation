import { NextRequest, NextResponse } from "next/server";
import getConnection from "@/db";
// import { Server } from "socket.io";
// import { Server as HTTPServer } from "http";
// import { Server as SocketIOServer } from "socket.io";
// import { Socket } from "net";

// interface CustomSocket extends Socket {
//   server: HTTPServer & {
//     io?: SocketIOServer;
//   };
// }
// export interface Message {
//   id: string;
//   name?: string;
//   content: string;
//   createdAt: Date;
// }

// let messages: Message[] = [];

// export const socketHandler = (req: NextApiRequest, res: NextApiResponse) => {
//   const customSocket = res.socket as CustomSocket;

//   if (customSocket.server && !customSocket.server.io) {
//     // Initialize Socket.IO server here
//     const io = new SocketIOServer(customSocket.server);
//     customSocket.server.io = io;

//     // Add your Socket.IO event handlers here
//     io.on("connection", (socket) => {
//       console.log("A user connected");

//       socket.emit("load-messages", messages);

//       socket.on("new-message", (message: Message) => {
//         messages.unshift(message);
//         io.emit("added-new-message", messages);
//       });

//       socket.on("delete-message", (messageId: string) => {
//         messages = messages.filter((msg) => msg.id !== messageId);
//         io.emit("updated-deleted-messages", messages);
//       });

//       socket.on("disconnect", () => {
//         console.log("disconnected");
//       });
//     });

//     // customSocket.server.io = io;
//   }

//   res.end();
// };

// // const messageHandler = (req: NextApiRequest, res: NextApiResponse) => {
// //   switch (req.method) {
// //     case "GET":
// //       res.status(200).json(messages);
// //       break;
// //     case "POST":
// //       const newMessage: Message = {
// //         id: (messages.length + 1).toString(),
// //         name: req.body.name,
// //         content: req.body.content,
// //         createdAt: new Date(),
// //       };
// //       messages.unshift(newMessage);
// //       res.status(201).json(newMessage);
// //       break;
// //     case "PUT":
// //       const { id, name, content } = req.body;
// //       messages = messages.map((msg) =>
// //         msg.id === id ? { ...msg, name, content } : msg
// //       );
// //       res.status(201).json({ message: "Message updated successfully" });
// //       break;
// //     case "DELETE":
// //       const { id: deleteId } = req.query;
// //       messages = messages.filter((msg) => msg.id != deleteId);
// //       res.status(200).json({ message: "Message deleted successfully" });
// //       break;
// //     default:
// //       res.status(405).end(`Method ${req.method} not Allowed`);
// //   }
// // };

// // export default messageHandler;

export async function GET(req: NextRequest) {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute("SELECT * FROM messages");
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch messages." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const connection = await getConnection();
  try {
    if (req.method === "POST") {
      const { name, message } = await req.json();
      if (!message) {
        NextResponse.json({ error: "Message is required." }, { status: 400 });
        return;
      }
      await connection.execute(
        "INSERT INTO messages (name,message) VALUES (?,?)",
        [name || "Anonymous", message]
      );
      return NextResponse.json({ sucess: true }, { status: 200 });
    }
  } catch (err) {}
}

export async function PUT(req: NextRequest) {
  const connection = await getConnection();
  const { id, editMessage } = await req.json();

  try {
    if (!id || !editMessage) {
      console.log(id);
      return NextResponse.json({ status: 404 }, { statusText: "Need Id" });
    }

    await connection.execute("UPDATE messages SET message=? WHERE id=?", [
      editMessage,
      id,
    ]);
    return NextResponse.json(
      { Success: true, message: "Updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to Update message." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const connection = await getConnection();
  const { id, message } = await req.json();

  try {
    if (!id) {
      return NextResponse.json({ status: 404 }, { statusText: "Need Id" });
      return;
    }

    await connection.execute("DELETE FROM messages WHERE id=?", [id]);
    return NextResponse.json(
      { Success: true, message: "Updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete message." },
      { status: 500 }
    );
  }
}
