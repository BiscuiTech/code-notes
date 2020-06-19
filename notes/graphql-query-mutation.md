---
title: Query & Mutation Redirect
tags:
  - javascript
  - apollo
  - graphql
---

```tsx
const Signout = (props) => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(signout) => (
      <SignoutButton
        onClick={async () => {
          await signout();
          Router.push({ pathname: "/" });
        }}
      >
        Logout
      </SignoutButton>
    )}
  </Mutation>
);
```
