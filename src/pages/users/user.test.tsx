import { cleanup, render, screen } from "@testing-library/react";
import { Users } from "./users";
import { MemoryRouter } from "react-router-dom";

// Mock the useQuery hook
vi.mock("react-query", () => ({
  useQuery: vi
    .fn()
    .mockImplementationOnce(() => ({
      isLoading: false,
      error: null,
      data: {
        data: [{ id: 1, name: "John Doe" }],
        meta: { last_page: 5 },
      },
    }))
    .mockImplementationOnce(() => ({
      isLoading: true,
      error: null,
      data: null,
    }))
    .mockImplementationOnce(() => ({
      isLoading: false,
      error: new Error("Failed to fetch (500): Internal Server Error"),
      data: null,
    })),
}));

afterEach(() => {
  cleanup();
});

describe("Users Integration Tests", () => {
  test("should display dashboard and pagination when data is loaded", async () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Users />
      </MemoryRouter>
    );

    // Verify that the dashboard component is rendered
    expect(screen.getByTestId("dashboard")).toBeInTheDocument();

    // Verify that the pagination component is rendered
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("should display loading icon when data is loading", async () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByTestId("linear-progress")).toBeInTheDocument();
  });

  it("should display error message when data fetch fails", async () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Users />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();
  });
});
