import { Route, Routes } from "react-router";
import { PendingPage } from "./pendingPage";
import { ReviewPage } from "./reviewPage";

export default function ProductRoutes() {
  return (
    <Routes>
        <Route path='pending' element={<PendingPage/>} />
        <Route path='review' element={<ReviewPage/>} />
    </Routes>
  )
}
