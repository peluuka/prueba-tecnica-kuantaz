"use client";
import Form from "@/components/Form";
import Container from "@mui/material/Container";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Click");
  };

  return (
    <Container maxWidth="md">
      <div className="flex">
        <div className="mx-auto min-h-screen content-center">
          <div className="px-16 py-7  rounded-lg bg-slate-50 border-2 shadow-lg shadow-gray-300">
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Container>
  );
}
