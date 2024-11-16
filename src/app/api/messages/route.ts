import { NextRequest, NextResponse } from "next/server";
import getConnection from "@/db";

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
  } finally {
    connection.release();
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
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
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
  } finally {
    connection.release();
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
  } finally {
    connection.release();
  }
}
