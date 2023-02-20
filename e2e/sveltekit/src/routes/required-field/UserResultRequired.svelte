<script lang="ts">
  import { CachePolicy, GQL_UserRequired } from '$houdini';

  async function getUser(id: string, forceNullDate: boolean) {
    await GQL_UserRequired.fetch({
      variables: { id, forceNullDate },
      policy: CachePolicy.NetworkOnly
    });
  }
</script>

<button id="getNonNull" on:click={() => getUser('1', false)}
  >GET User with non-null birthdate</button
>
<button id="getNull" on:click={() => getUser('2', true)}>GET User with null birthdate</button>

<div id="result">
  <pre>{JSON.stringify($GQL_UserRequired?.data, null, 2)}</pre>
</div>
