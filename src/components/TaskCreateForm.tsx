import { Form } from "react-router-dom";

export function TaskCreateForm({submitting}: {submitting: boolean}) {
  return <div style={{marginTop: "10px", backgroundColor:"#fff", padding: "10px"}}>
    <Form method="post" action="/tasks/new">
      <div>
        <label>
          <span>Title</span>
          <input name="title"></input>
        </label>
      </div>
      <div>
        <label>
          <span>Content</span>
          <input name="content"></input>
        </label>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          CREATE
        </button>
        </div> 
    </Form>
  </div>
}