<template>
  <table class="w-full border border-[var(--ui-border)]">
    <thead>
      <tr>
        <th class="text-start">
          Дата
        </th>
        <th class="text-start">
          Время
        </th>
        <th class="text-start">
          Статус
        </th>
        <th class="text-start">
          Название учебного модуля
        </th>
        <th class="text-start">
          Тип сессии
        </th>
        <th class="text-start">
          Комната
        </th>
        <th class="text-start">
          Группа
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="session in props.sessions"
        :key="session.id"
      >
        <td>{{ session.date }}</td>
        <td>{{ session.time }}</td>
        <td>{{ session.status }}</td>
        <td>{{ session.name }}</td>
        <td>{{ session.type }}</td>
        <td>{{ session.room.map(roomId => roomNames[roomId] || '...').join(', ') }}</td>
        <td>{{ groupNames[session.group] || '...' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { getRoomsAsync } from "~/composables/useRooms";
import { getGroupsAsync } from "~/composables/useGroups";

const props = defineProps<{ sessions: ISession[] }>();

const roomNames = ref<Record<string, string>>({});
const groupNames = ref<Record<string, string>>({});

onMounted(async () => {
  const rooms = await getRoomsAsync();
  const groups = await getGroupsAsync();

  roomNames.value = Object.fromEntries(rooms.map(room => [room.id, room.name]));
  groupNames.value = Object.fromEntries(groups.map(group => [group.id, group.name]));

});
</script>