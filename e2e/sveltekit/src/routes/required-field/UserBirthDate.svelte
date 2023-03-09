<script lang="ts">
  import {
    fragment,
    graphql,
    type UserBirthDate,
    type UserBirthDate$data,
    type UserBirthDateRequired,
    type UserBirthDateRequired$data
  } from '$houdini';
  import { get, type Readable } from 'svelte/store';

  export let user: UserBirthDate;
  export let userRequired: UserBirthDateRequired;

  $: data = fragment<UserBirthDate>(
    user,
    graphql`
      fragment UserBirthDate on User {
        birthDate
      }
    `
  );

  $: requiredData = fragment<UserBirthDateRequired>(
    userRequired,
    graphql`
      fragment UserBirthDateRequired on User {
        birthDate @required
      }
    `
  );

  const _assert0: Readable<UserBirthDate$data> = data;
  const _assert1: Readable<UserBirthDateRequired$data> = requiredData;
  const _assert2: { birthDate: Date | null } = get(data);
  const _assert3: { birthDate: Date } | null = get(requiredData);
</script>

<p>{$data.birthDate}</p>
<p>{$requiredData?.birthDate}</p>
