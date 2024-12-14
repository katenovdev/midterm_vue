// Store (на основе Pinia)
import { defineStore } from 'pinia';

export const useResumeStore = defineStore('resume', {
    state: () => ({
        resumes,
    }),
    actions: {
        addResume(resume) {
            this.resumes.push(resume);
        },
        removeResume(id) {
            this.resumes = this.resumes.filter(resume => resume.id !== id);
        },
        updateResume(id, updatedFields) {
            const index = this.resumes.findIndex(resume => resume.id === id);
            if (index !== -1) {
                this.resumes[index] = { ...this.resumes[index], ...updatedFields };
            }
        },
    },
});